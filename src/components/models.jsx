import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getModels } from "./../services/modelService";
import { paginate } from "./../utils/paginate";
import SearchBox from "./common/searchBox";
import Pagination from "./common/pagination";
class Models extends Component {
  state = {
    models: [],
    currentPage: 1,
    pageSize: 8,
    searchQuery: "",
  };

  handleSearch = (query) => {
    this.setState({ searchQuery: query, currentPage: 1 });
  };

  async componentDidMount() {
    const { data: models } = await getModels();
    this.setState({ models });
  }

  handleDelete = (model) => {
    const models = this.state.models.filter((m) => m._id !== model._id);
    this.setState({ models });
  };

  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    const { length: count } = this.state.models;
    const {
      pageSize,
      currentPage,
      models: allModels,
      searchQuery,
    } = this.state;

    let filtered = allModels;

    if (searchQuery)
      //For few columns implemented checking value in all columns else a column needs to stored in
      //mongodb with all values from all columns and the query string to be checked as substring with that column
      filtered = allModels.filter(
        (m) =>
          m.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.modelWear.toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.height
            .toString()
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          m.bust.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
          m.waist
            .toString()
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          m.lowHip
            .toString()
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          m.highHip.toString().toLowerCase().includes(searchQuery.toLowerCase())
      );

    const models = paginate(filtered, currentPage, pageSize);
    return (
      <div className="col mt-6">
        <div className="row mb-2 col">
          <div className="row col-md-11">
            <Link to="/models/new" className="btn btn-primary col-md-2">
              Add New Model
            </Link>
            <SearchBox value={searchQuery} onChange={this.handleSearch} />
          </div>
        </div>

        <div className="row row-cols-3 col-md-12 mt-2">
          {models.map((model) => (
            <div key={model._id} className="card col-md-5 m-1">
              <div className="row no-gutters">
                <div className="col-md-3">
                  <div className="row">
                    <img
                      src="https://res.cloudinary.com/demo/image/upload/w_400,h_400,c_crop,g_face,r_max/w_200/lady.jpg"
                      className="card-img"
                      alt="..."
                    />
                  </div>
                  <div className="row ml-2 my-2">
                    <Link to={`/models/${model._id}`}>
                      {model.name} <i className="fa fa-edit"></i>
                    </Link>
                  </div>
                </div>
                <div className="col-md-9">
                  <div className="card-body">
                    <div className="row">
                      <h6 className="card-title col-md-4">Model Wear</h6>
                      <h6 className="card-title col-md-4">Height</h6>
                      <h6 className="card-title col-md-4">Bust</h6>
                    </div>
                    <div className="row">
                      <p className="card-text col-md-4">{model.modelWear}</p>
                      <p className="card-text col-md-4">{model.height}</p>
                      <p className="card-text col-md-4">{model.bust}</p>
                    </div>
                    <div className="row">
                      <h6 className="card-title col-md-4">Waist</h6>
                      <h6 className="card-title col-md-4">High Hip</h6>
                      <h6 className="card-title col-md-4">Low Hip</h6>
                    </div>
                    <div className="row">
                      <p className="card-text col-md-4">{model.waist}</p>
                      <p className="card-text col-md-4">{model.highHip}</p>
                      <p className="card-text col-md-4">{model.lowHip}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          itemsCount={filtered.length || 0}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </div>
    );
  }
}

export default Models;
