import React, {Component} from "react";
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Label,
    Input
} from "reactstrap";

export default class PostModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }
    handleChange = e => {
        let { name, value } = e.target;
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };

    render() {
        const { toggle, onSave } = this.props;
        return (
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}> Add Post </ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="titleText">Title</Label>
                            <Input
                                type="text"
                                id="titleText"
                                name="titleText"
                                value={this.state.activeItem.titleText}
                                onChange={this.handleChange}
                                placeholder="Enter Title"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="bodyText">Content</Label>
                            <Input
                                type="text"
                                id="bodyText"
                                name="bodyText"
                                value={this.state.activeItem.bodyText}
                                onChange={this.handleChange}
                                placeholder="Enter Content"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}