import React, { Component } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Confirm, Button } from './common';
import { employeeUpdate, employeeSave, employeeDelete } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }

    componentWillMount() {
        _.each(this.props.employee, (value, prop) => {
            this.props.employeeUpdate({ prop, value });
        });
    }

    onButtonPress() {
        const { name, phone, shift } = this.props;
        console.log(name, phone, shift)
        this.props.employeeSave({ name, phone, shift, uid: this.props.employee.uid });
    }

    onTextPress() {
        const { name, phone, shift } = this.props;
        Communications.text(phone, `Hi ${name}, just to inform that your upcoming shift will be on ${shift}`);
    }

    onDecline() {
        this.setState({ showModal: false })
    }

    onAccept() {
        const { uid } = this.props.employee
        this.props.employeeDelete({ uid })
    }

    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Message
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
                        Delete Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showModal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Confirm delete employee?
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return { name, phone, shift }
}

export default connect(mapStateToProps, { employeeUpdate, employeeSave, employeeDelete })(EmployeeEdit);