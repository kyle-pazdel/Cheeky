import React, {Component} from 'react';
import {View, ScrollView, Text, TextInput} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
    };
  }

  componentDidMount() {
    this.props.actions.fetchNotes();
  }

  _renderNotes() {
    const {data, status} = this.props.notes;
    if (status === 'failure') {
      return <Text>{'Error'}</Text>;
    } elsif (status == 'loading') {
      return <Text>{'Loading'}</Text>;
    }
    return (
      <View>{data.map(note => this._renderNote(note))}</View>
    );
  }

  _renderCreateForm() {
    return(
      <View>
        <TextInput
        style={styles.textfield}
        placeholder={'Text'}
        onChangeText={text => this.setState({text})}
        value={this.state.text}>
        </TextInput>
      </View>
    )
  }

  render() {
    return (
      <ScrollView style="{styles.container}">{this._renderNotes()}</ScrollView>
    );
  }
}
