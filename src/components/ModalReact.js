import React from 'react';
import { withRouter } from 'react-router-dom';

import Modal from 'react-modal';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)'
	},
	overlay: {
		backgroundColor: 'rgb(55, 55, 55, 0.75)'
	}
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

class ModalReact extends React.Component {
	constructor() {
		super();
		this.state = {
			modalIsOpen: false
		};
		this.openModal = this.openModal.bind(this);
		this.closeModal = this.closeModal.bind(this);
		this.leftButton = this.leftButton.bind(this);
		this.rightButton = this.rightButton.bind(this);
	}

	openModal() {
		this.setState({ modalIsOpen: true });
	}

	closeModal() {
		this.setState({ modalIsOpen: false });
	}

	leftButton() {
		this.props.leftButton();
	}

	rightButton() {
		this.props.rightButton();
	}

	render() {
		return (
			<div>
				<Modal
					isOpen={this.props.showModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<div className="modal-header">
						<h5 ref={subtitle => this.subtitle = subtitle} className="modal-title">{this.props.modalTitle}</h5>
					</div>
					<div className="modal-body">
						<p>{this.props.modalBody}</p>
					</div>
					<div className="modal-footer">
						<button onClick={this.leftButton} type="button" className="btn btn-success" data-dismiss="modal">{this.props.leftText}</button>
						<button onClick={this.rightButton} type="button" className="btn btn-info">{this.props.rightText}</button>
					</div>
				</Modal>
			</div>
		);
	}
}

export default withRouter(ModalReact);