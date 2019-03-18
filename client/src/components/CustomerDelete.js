import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography'

const styles= theme=>{}
class CustomerDelete extends React.Component{
    constructor(props){
        super(props);
        this.state={
            open:false
        }
    }
    deleteCustomer = (id) => {
        const url = 'api/customers/'+id;
        fetch(url,{
            method:'DELETE'
        });
        this.props.stateRefresh();
    }
    handleClickOpen = () =>{
        this.setState({
            open: true
        })
    }
    handleClose = () => {
        this.setState({
           
            open:false
        })
    }
    render(){
        return(
            <div>

            <Button variant="contained" color='secondary' onClick={this.handleClickOpen}>삭제</Button>
            <Dialog open={this.state.open}>
                <DialogTitle>삭제</DialogTitle>
                <DialogContent >
                    <Typography variant='subtitle2' gutterBottom>정말 삭제하시겠습니까?</Typography>
                    </DialogContent>
                <DialogActions>
                    <Button variant='contained' color='secondary' onClick={(e)=>{this.deleteCustomer(this.props.id)}}>예</Button>
                    <Button variant='outlined' color='primary' onClick={this.handleClose}>아니오</Button>
                </DialogActions>
            </Dialog>
            </div>
        );}
}

export default CustomerDelete;