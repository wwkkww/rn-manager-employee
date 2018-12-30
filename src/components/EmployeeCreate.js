import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';


class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input label="Name" placeholder="Employee Name" />
                </CardSection>

                <CardSection>
                <Input label="Phone" placeholder="012345678" />
                </CardSection>

                <CardSection>
                    <Input label="Picker" placeholder="Pick a day" />
                </CardSection>

                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>

            </Card>
        );
    }
}

export default EmployeeCreate;