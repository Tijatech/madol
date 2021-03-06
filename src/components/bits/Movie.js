import React, { Component } from 'react';

class Movie extends Component {
   movStyle = {
       position:"absolute",
       width:"100%",
       top:"0",
       height:"100%",
       padding:"0 20px  20px 20px",
       background:"rgba(0, 0, 0, 0.452)",
       display:"flex",
       alignItems:"flex-end"

   }
    render(){
        
        return(
            <div className={this.props.className}>
                <img src={this.props.movie.img} alt={this.props.title} width={this.props.imgWidth}  height="100%"/>
                <div className="mov-inner" style={this.movStyle}>
                    <div className="mov-details">
                        <h2>{this.props.movie.title}</h2>
                        <div><small>Action X X X X X</small></div>
                    </div>                    
                </div>
            </div>
        )
    }
}
export default Movie;