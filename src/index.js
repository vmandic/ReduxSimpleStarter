import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import _ from "lodash";

import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import SearchBar from "./components/search_bar";

const key = "AIzaSyB0LkZsDM6CjGsRbnsBkdgmlvi5grnxvnU";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key, term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={ term => videoSearch(term) } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          videos={ this.state.videos }
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) } />
      </div>
    );
  }

}

ReactDOM.render(<App />, document.getElementsByClassName("container")[0]);