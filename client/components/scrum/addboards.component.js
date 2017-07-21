import React, { Component } from 'react' ;
import { Link } from 'react-router-dom'; 
import FormField from './../common/form.field' ;
import { connect } from 'react-redux' ;
import { createBoard } from './../../actions/board.actions';
import { createHashHistory } from 'history'
const history = createHashHistory();


class AddBoardComponent extends Component{
    constructor(){
        super();
        this.state={
            boardType: 'scrum',
            boardName: '', 
            errors: {},
            isLoading: false
        }
        this.onChange = this.onChange.bind(this) ;
        this.onSubmit = this.onSubmit.bind(this) ;
    }

    onChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        this.props.createBoard(this.state).then(
            res => this.props.history.push('/board/'+res.data.board._id),            
            err => {
                this.setState({ errors: err.response.data.errors });
            }
        ); 
        
    }

    render(){
        return(
            <div className='col-md-6 col-xs-12 m-t-20'>
                <h3>Add A New Board</h3>
                <form onSubmit={this.onSubmit}>
                { this.state.errors.form && <div className='alert alert-danger'>{this.state.errors.form}</div>}
                <FormField 
                    type='text' 
                    name='boardName' 
                    value={this.state.boardName} 
                    onChange={this.onChange}
                    errors={this.state.errors.boardName}
                    required='required'/>
                
                <FormField 
                    label='Add' 
                    type='button'
                    btnClass='btn-primary'
                    loading={this.state.isLoading}
                    disabledItems={this.state.isLoading} 
                    />

                </form>                
                
            </div>
        )
    }
}

AddBoardComponent.propTypes = {
    createBoard: React.PropTypes.func.isRequired
}

export default connect(null , { createBoard , history })(AddBoardComponent)