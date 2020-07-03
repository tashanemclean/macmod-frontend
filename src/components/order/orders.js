import React, { useEffect,useState } from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TextField from '@material-ui/core/TextField';
import Button from "components/CustomButtons/Button.js";
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import InputLabel from '@material-ui/core/InputLabel';
import Fade from '@material-ui/core/Fade';

import { connect } from 'react-redux';
import * as actions from '../../actions';

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'grid'
    },
  }
}));

const ExpansionPanel = withStyles({
  root: {
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiExpansionPanelDetails);

function generate(element) {
	return [0, 1, 2].map((value) =>
	  React.cloneElement(element, {
		key: value,
	  }),
	);
}

function Orders(props) {

  const classes = useStyles();

  const [activeItem, setActiveItem] = useState([])

  const [open, setOpen] = React.useState(false);

  const [dense, setDense] = React.useState(false);

  const [secondary, setSecondary] = React.useState(false);

  const handleOpen = (orders) => {
    setActiveItem(orders)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const getTotal = (order) => {
    let subtotal = 0;
    order.items.map(item => {
        subtotal += parseInt(item.amount) * parseInt(item.base_price)
    })
    return subtotal
  }

  useEffect(() =>{
    props.fetchRecentOrders()
  },[])

  const orders = props.orders

  return (
    <div>
        {orders.map((order,key) => {
            return (
                <ExpansionPanel key={key} square expanded={expanded === order._id} onChange={handleChange(order._id)}>
                    <ExpansionPanelSummary aria-controls={`${order._id}-content`} id={`${order._id}-header`}>
                    <Typography>{order.companyname}</Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                    <Typography>
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="simple table">
                            <TableHead>
                            <TableRow>
                                <TableCell>ORDER ID</TableCell>
                                <TableCell align="right">ORDER DATE</TableCell>
                                <TableCell align="right">COMPANY</TableCell>
                                <TableCell align="right">COMPANY ADDRESS</TableCell>
                                <TableCell align="right">PAYMENT METHOD</TableCell>
                                <TableCell align="right">PAYMENT STATUS</TableCell>
                                <TableCell align="right">ORDER TOTAL</TableCell>
                            </TableRow>
                            </TableHead>
                        <TableBody>
                            <TableRow>
                            <TableCell component="th" scope="row">
                                {order._id['$oid']}
                            </TableCell>
                            <TableCell align="right">{new Date(order?.orderplaced?.['$date']).toLocaleString()}</TableCell>
                            <TableCell align="right">{order.companyname}</TableCell>
                            <TableCell align="right">{order.companyaddress}</TableCell>
                            <TableCell align="right">{order.companyaddress}</TableCell>
                            <TableCell align="right">{order.companyaddress}</TableCell>
                            <TableCell align="right">${getTotal(order)}</TableCell>
                            </TableRow>
                        </TableBody>
                        </Table>
                        </TableContainer>
                    </Typography>
                    <Button size='sm' rounded onClick={() => handleOpen(order)}>VIEW ORDER</Button>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            )
        })}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
			<Fade in={open} onEnter={()=> props.fetchOrderedItems(activeItem.items)}>
				<div className={classes.paper}>
					<div className='order-header'>
						<h2 id="transition-modal-title">Order # {activeItem?._id?.["$oid"]}</h2>
					</div>
					<hr></hr>
					<div className="order-details" id="transition-modal-description">

						<div className="order-details__info">
							<div className="order-details-info__billing">
								<h3>Billing details</h3>
								<form className={classes.root} noValidate autoComplete="off">
									<InputLabel htmlFor="company-name">company name</InputLabel>
									<TextField 
										disabled
										id="company-name"
										label={activeItem.companyname}
										variant="filled" 
									/>

									<InputLabel htmlFor="cc-name">name on card</InputLabel>
									<TextField 
										disabled
										id="cc-name"
										label={activeItem.ccname}
										variant="filled" 
									/>

									<InputLabel htmlFor="cc-num">card number</InputLabel>
									<TextField 
										disabled
										id="cc-num"
										label={activeItem.card}
										variant="filled" 
									/>

									<InputLabel htmlFor="expiration-date">expiration</InputLabel>
									<TextField 
										disabled
										id="expiration-date"
										label={new Date(activeItem?.expiration?.['$date']).toLocaleString()}
										variant="filled" 
									/>
								</form>
							</div>
							<div className="order-details-info__shipping">
								<h3>Shipping details</h3>
								<form className={classes.root} noValidate autoComplete="off">
								<InputLabel htmlFor="company-address">company address</InputLabel>
								<TextField 
									disabled
									id="company-address"
									label={activeItem.companyaddress}
									variant="filled" 
								/>

								<InputLabel htmlFor="city">city</InputLabel>
								<TextField 
									disabled
									id="city"
									label={activeItem.city}
									variant="filled" 
								/>

								<InputLabel htmlFor="state">state</InputLabel>
								<TextField 
									disabled
									id="state"
									label={activeItem.state}
									variant="filled" 
								/>

								<InputLabel htmlFor="zip">zipcode</InputLabel>
								<TextField 
									disabled
									id="zip"
									label={activeItem.zipcode}
									variant="filled" 
								/>
								</form>

							</div>
						</div>
		
						<TableContainer component={Paper}>
							<Table className={classes.table} aria-label="simple table">
							<TableHead>
							<TableRow>
								<TableCell align="right">PART NUMBER</TableCell>
								<TableCell align="right">PRODUCT</TableCell>
								<TableCell align="right">QUANTITY</TableCell>
								<TableCell align="right">TOTAL</TableCell>
							</TableRow>
							</TableHead>
							<TableBody>
								{
									props.ordereditems?.map((item,key) => {
										return (
											<TableRow key={key}>
												<TableCell align="right">{item['part_number']}</TableCell>
												<TableCell align="right">{item['description']}</TableCell>
												<TableCell align="right">{item['amount']}</TableCell>
												<TableCell align="right">{item['base_price']}</TableCell>
											</TableRow>
										)
									})
								}
							</TableBody>
							</Table>
						</TableContainer>

					</div>
				</div>
			</Fade>
        </Modal>
    </div>
  );
}

function mapStateToProps(state){
	const { ordereditems,orders } = state.orders
    return { orders,ordereditems }
}

Orders = connect(mapStateToProps,actions)(Orders)

export default Orders;