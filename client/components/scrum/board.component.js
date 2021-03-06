import React, { Component } from 'react' ;
import ListsComponent from './lists.component';
import { listOneBoard } from './../../data/api.service'; 
import { connect } from 'react-redux'; 
import { setCurrentBoard } from './../../actions/board.actions'; 

class BoardComponent extends Component{
    constructor(props){
        super(props);

        this.state = {
            boardInfo: {},
            boardId: props.match.params.id
        }
    }

    componentDidMount(){
		listOneBoard(this.props.match.params.id).then(
            res=>{
                this.setState({boardInfo: res.data.board}); 
                this.props.setCurrentBoard(res.data.board);
            },
            err=>{
                this.props.history.push('/scrum'); 
            }
        ); 
	}
    
    render(){
        return (
            <div className='board-content'>
                <div className='board-content-wrap'>
                    <div className='board-content-full'>
                        <div className='b-header'>
                            <h2>{this.state.boardInfo.boardName}</h2>
                        </div>
                        <div className='b-container'>
                            <ListsComponent boardId={this.state.boardId}/>                            
                        </div>

                    </div>
                    <div className='board-content-menu hide'></div>
                </div>
            </div>
        )
    }
}
BoardComponent.propTypes = {
    setCurrentBoard: React.PropTypes.func.isRequired
}

export default connect(null, { setCurrentBoard })(BoardComponent)