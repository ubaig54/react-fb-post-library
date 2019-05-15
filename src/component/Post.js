import React, { Component } from 'react';
import '../App.css';
import FacebookEmoji from 'react-facebook-emoji';
import FbImageLibrary from 'react-fb-image-grid';
import moment from 'moment';

class Post extends Component {
	constructor() {
		super();
		this.state = {
			post: {},
			isReactions: false,
			isLiked: false,
		}
		this.reactions = this.reactions.bind(this);
		this.reacted = this.reacted.bind(this);
		this.liked = this.liked.bind(this);
	}

	static getDerivedStateFromProps(props) {
		return {
			post: {
				createdBy: props.createdBy,
				avatar: props.avatar,
				caption: props.caption,
				images: props.images,
				createdAt: Date.now(),
				likes: ['Ali', 'Salman', 'Zain', 'Qasim', 'Atif', 'Ahmed'],
			}
		}
	}

	reactions() {
		this.setState({
			isReactions: !this.state.isReactions,
		})
	}

	reacted() {
		this.setState({
			isLiked: true,
			isReactions: false,
		})
	}

	liked() {
		const { isLiked } = this.state;
		this.setState({
			isLiked: !isLiked,
			isReactions: false,
		})
	}

	render() {
		const { post, isReactions, isLiked } = this.state;
		return (
			<div className="mainPost">
				<div className="Post">
					<div className="containerr">
						<div className="avatar">
							<img src={post.avatar} alt="Avatar" />
						</div>
						<div className="nameAndTime">
							<div className="name">{post.createdBy}</div>
							<div className="time">{moment(post.createdAt).fromNow()}</div>
						</div>
					</div>
					<div className="caption">
						{post.caption}
					</div>
					<div className="images">
						<FbImageLibrary hideOverlay={true} images={post.images} />
					</div>
					<div className="engagementDetails">
						<span>{isLiked && 'You, '} {post.likes[0]} & {post.likes.length - 2} others reacted</span>
					</div>
					<hr />
					<div className="engagement">
						{isReactions && <div className="reactions">
							<span onClick={this.reacted} className="FacebookEmoji">
								<FacebookEmoji type="like" size="sm" />
							</span>
							<span onClick={this.reacted} className="FacebookEmoji">
								<FacebookEmoji type="love" size="sm" />
							</span>
							<span onClick={this.reacted} className="FacebookEmoji">
								<FacebookEmoji type="haha" size="sm" />
							</span>
							<span onClick={this.reacted} className="FacebookEmoji">
								<FacebookEmoji type="wow" size="sm" />
							</span>
							<span onClick={this.reacted} className="FacebookEmoji">
								<FacebookEmoji type="sad" size="sm" />
							</span>
							<span onClick={this.reacted} className="FacebookEmoji">
								<FacebookEmoji type="angry" size="sm" />
							</span>
						</div>}
						<span className="oneThird" onMouseEnter={this.reactions} onClick={this.liked}>Like</span>
						<span className="oneThird">Comment</span>
						<span className="oneThird">Share</span>
					</div>
				</div >
			</div>
		)
	}
}

export default Post;