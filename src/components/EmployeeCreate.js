import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { employeeUpdate } from '../actions';


class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Employee Name"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    // onChangeText={(text) => console.log(text)}
                    />
                </CardSection>

                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="012345678"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>

                <CardSection>
                    <View style={styles.containerStyle}>
                        <Text style={styles.labelStyle}>Work Shift</Text>
                        <Picker
                            selectedValue={this.props.shift}
                            style={styles.pickerStyle}
                            onValueChange={(day) => this.props.employeeUpdate({prop: 'shift', value: day })}>
                            <Picker.Item label="Monday" value="Monday" />
                            <Picker.Item label="Tuesday" value="Tuesday" />
                            <Picker.Item label="Wednesday" value="Wednesday" />
                            <Picker.Item label="Thursday" value="Thursday" />
                            <Picker.Item label="Friday" value="Friday" />
                            <Picker.Item label="Saturday" value="Saturday" />
                            <Picker.Item label="Sunday" value="Sunday" />
                        </Picker>
                    </View>

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

// const styles = StyleSheet.create({
//     pickerTextStyle: {
//         paddingLeft: 20,
//         paddingBottom: 0,
//         fontSize: 18,
//         flex: 1
//     }
// })

const styles = StyleSheet.create({
    pickerStyle: {
        paddingRight: 2,
        paddingLeft: 2,
        // fontSize: 18,
        // lineHeight: 25,
        flex: 2,
        paddingBottom: 2
    },
    labelStyle: {
        paddingLeft: 20,
        paddingBottom: 0,
        fontSize: 18,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 0
    }
});

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    }
}

export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);