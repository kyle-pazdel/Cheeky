import React, {Component} from 'react';
import {View, ScrollView, Text} from 'react-native';

export default class Home extends Component {
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
      <View>{data.map(note => this._renderNote(note.performer_name))}</View>
    );
  }

  render() {
    return (
      <ScrollView style="{styles.container}">{this._renderNotes()}</ScrollView>
    );
  }
}
