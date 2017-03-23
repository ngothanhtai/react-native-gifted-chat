import React from 'react';
import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import LightBox from 'react-native-lightbox';
import PhotoView from 'react-native-photo-view';

export default class MessageImage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imgWidth: 150, imgHeight: 100,
    }
  }

  componentDidMount() {
    const { image } = this.props.currentMessage;
    Image.getSize(image, (imgWidth, imgHeight) => {
      const scaleRatio = 200/imgWidth;
      this.setState({
        imgWidth: imgWidth * scaleRatio,
        imgHeight: imgHeight * scaleRatio,
      });
    });

  }
  render() {
    const { imgWidth, imgHeight } = this.state;
    const { image } = this.props.currentMessage;
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
          style={[styles.image, this.props.imageStyle, { width: imgWidth, height: imgHeight, }]}
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
