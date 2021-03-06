import React, {Component} from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation
} from 'react-native';
import {connect} from 'react-redux';
import {Box} from './common';
import * as actions from '../actions';


class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  renderDescription() {
    const {library, expanded} = this.props;

    if (expanded) {
      return (
        <Box>
          <Text style={{flex: 1}}>{library.description}</Text>
        </Box>
      );
    }
  }

  render() {
    const {titleStyle} = styles;
    const {id, title} = this.props.library;


    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <Box>
            <Text style={titleStyle}>{title}</Text>
          </Box>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 10,
    paddingRight: 10
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;
  return {expanded};
};

export default connect(mapStateToProps, actions)(ListItem);