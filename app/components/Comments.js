import React from 'react';

const Comments = React.createClass({
	handleSubmit(e){
		e.preventDefault();
		const { postId } = this.props.params;
		const author = this.refs.author.value;
		const comment = this.refs.comment.value;
		this.props.addComment(postId, author, comment);
		this.refs.commentForm.reset();
	},
	render(){
		return(
			<div className="comment">
				{this.props.postComments.map((c, i) => 
					<div key={i} className="comment">
						 <p>
						 	<strong>{c.user}</strong>
						 	{c.text}
						 	<button className="remove-comment" onClick={this.props.removeComment.bind(null,this.props.params.postId,i)}>&times;</button>
						 </p>
					</div>
				)}
				<form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
					<input type="text" ref="author" placeholder="author"/>
					<input type="text" ref="comment" placeholder="comment"/>
					<input type="submit" hidden />
				</form>
			</div>
		)
	}
})

export default Comments;