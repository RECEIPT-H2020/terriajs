import React from "react";
import Styles from "./RCStoryList.scss";
import { API, graphqlOperation } from "aws-amplify";
import { listStorys } from "../../../../api/graphql/queries";

class RCStoryList extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    stories: []
  };

  componentDidMount() {
    this.fetchStories();
  }

  fetchStories() {
    try {
      API.graphql(graphqlOperation(listStorys)).then(data => {
        const storylist = data.data.listStorys.items;
        console.log(storylist);
        this.setState({ stories: storylist });
      });
    } catch (error) {
      console.log("Error fetching stories:", error);
    }
  }

  render() {
    const { stories } = this.state;

    return (
      <div className={Styles.RCStoryList}>
        <h1>My stories</h1>
        <div className={Styles.list}>
          <p>List of stories</p>
        </div>
      </div>
    );
  }
}

export default RCStoryList;
