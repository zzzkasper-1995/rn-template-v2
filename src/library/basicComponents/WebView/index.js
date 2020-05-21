import React from 'react';
import {WebView as Web, WebViewProps} from 'react-native-webview';

// See: https://github.com/react-native-community/react-native-webview

type Props = {
  reference?: Function,
};

/** Обетка над WebView  */
class WebView extends React.PureComponent<Props & WebViewProps> {
  constructor(props) {
    super(props);
  }

  handleRef = (ref) => {
    const {reference} = this.props;

    reference?.(ref);
    this.web = ref;
  };

  render() {
    const {props} = this;
    const {source, style, reference, ...other} = props;

    return (
      <Web
        ref={this.handleRef}
        source={source}
        showsVerticalScrollIndicator={true}
        style={style}
        {...other}
      />
    );
  }
}

export default WebView;
