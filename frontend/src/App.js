import './App.css';
import React, { Component } from 'react';
import Modal from './components/Modal';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true,
      modal: false,
      activeItem: {
        id: null,
        titleText: "",
        bodyText: "",
        createdAt: "",
        user: "user1",
      },
    };

  }

  componentDidMount() {
    this.refreshList();
  }
  
  refreshList = () => {
    axios
      .get("/api/posts/")
      .then((res) => this.setState({ posts: res.data }))
      .catch((err) => console.log(err))
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  }

  handleSubmit = (item) => {
    this.refreshList();

    // Ensure all required fields are properly validated and formatted
    const formattedItem = {
      ...item,
      titleText: item.titleText.trim() || "Untitled", // Default title if empty
      bodyText: item.bodyText.trim() || "No content", // Default content if empty
      createdAt: item.createdAt.trim() || new Date().toISOString().split('T')[0],
      user: item.user || "Anonymous", // Default user if empty
    };

    if (formattedItem.id) {
      return axios
        .put(`/api/posts/${formattedItem.id}/`, formattedItem)
        .then((res) => this.refreshList())
        .catch((err) => console.log(err))
        .finally(() => this.toggle());
    }
    axios
      .post("/api/posts/", formattedItem)
      .then((res) => this.refreshList())
      .catch((err) => console.log(err))
      .finally(() => this.toggle());

    /*if (item.id) {
      // Edit existing post
      const index = posts.findIndex((post) => post.id === item.id);
      posts[index] = item;
    } else {
      // Add new post
      item.id = posts.length + 1; // Assign a new ID
      posts.push({
        id: item.id,
        title: item.titleText,
        content: item.bodyText,
        createdAt: new Date().toISOString().split('T')[0],
        user: item.user,
      });
    }
    this.setState({ posts });*/
  };

  handleDelete = (item) => {
    axios
      .delete(`/api/posts/${item.id}/`)
      .then((res) => this.refreshList())
      .catch((err) => console.log(err));
  };

  createItem = () => {
    const item = { titleText: "", bodyText: "", createdAt: "", user: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
  }

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  displayCompleted = (status) => {
    if (status) {
      return this.setState({ loading: false });
    }
    return this.setState({ loading: true });
  }

  renderTableData() {
      return this.state.posts.map((item) => {
        return (
          <tr key={item.id} onClick={() => this.editItem(item)}>
            <td>{item.id}</td>
            <td>{item.titleText}</td>
            <td>{item.bodyText || "No content available"}</td>
            <td>{item.createdAt}</td>
            <td>{item.user}</td>
          </tr>
        );
      });
  }

  render() {
    return (
      <main className="container">
        <h1 className="text-center">Campus Connect Forum</h1>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3 text-end">
              <button className="btn btn-primary" onClick={this.createItem}>
                Add Post
              </button>
            </div>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Created At</th>
                  <th>User</th>
                </tr>
              </thead>
              <tbody>
                {this.renderTableData()}
              </tbody>
            </table>
          </div>
        </div>
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
      </main>
    );
  }
}

export default App;