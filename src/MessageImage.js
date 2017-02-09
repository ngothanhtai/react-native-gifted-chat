import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import LightBox from 'react-native-lightbox';
import PhotoView from 'react-native-photo-view';

export default class MessageImage extends React.Component {
  render() {
    const {image} = this.props.currentMessage;
    return (
      <View style={[styles.container, this.props.containerStyle]}>
        <LightBox
          renderContent={() => {
                return <PhotoView
                  source={{uri: image}}
                  minimumZoomScale={1}
                  maximumZoomScale={3}
                  androidScaleType="center"
                />;
              }}
        >
        <Image
          style={[styles.image, this.props.imageStyle,]}
          source={{uri: image}}
        />
        </LightBox>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    paddingBottom: 2,
  },
  image: {
    width: 150,
    height: 100,
    margin: 3,
    resizeMode: 'cover',
  },
});

MessageImage.defaultProps = {
  currentMessage: {
    image: null,
  },
  containerStyle: {},
  imageStyle: {},
};

MessageImage.propTypes = {
  currentMessage: React.PropTypes.object,
  containerStyle: View.propTypes.style,
  imageStyle: Image.propTypes.style,
};
