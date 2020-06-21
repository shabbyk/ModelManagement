import React from "react";
import Joi from "joi-browser";
import Form from "./common/form";
import { saveModel, getModel } from "./../services/modelService";

class ModelsForm extends Form {
  state = {
    data: {
      name: "",
      modelWear: "",
      height: "",
      bust: "",
      waist: "",
      lowHip: "",
      highHip: "",
    },
    errors: {},
  };

  schema = {
    _id: Joi.string(),
    name: Joi.string().required().label("Name"),
    modelWear: Joi.string().required().label("Model Wear"),
    height: Joi.number().required().min(1).label("Height"),
    bust: Joi.number().required().min(1).label("Bust"),
    waist: Joi.number().required().min(1).label("Waist"),
    lowHip: Joi.number().required().min(1).label("Low Hip"),
    highHip: Joi.number().required().min(1).label("High Hip"),
  };

  async populateModel() {
    try {
      const modelId = this.props.match.params.id;
      if (modelId === "new") return;
      else {
        const { data: model } = await getModel(modelId);
        this.setState({ data: this.mapToViewModel(model) });
      }
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        this.props.history.replace("/not-found");
    }
  }

  async componentDidMount() {
    await this.populateModel();
  }

  mapToViewModel(model) {
    return {
      _id: model._id.toString(),
      name: model.name,
      modelWear: model.modelWear,
      height: model.height,
      bust: model.bust,
      waist: model.waist,
      lowHip: model.lowHip,
      highHip: model.highHip,
    };
  }

  doSubmit = async () => {
    await saveModel(this.state.data);
    this.props.history.push("/models");
  };
  render() {
    return (
      <React.Fragment>
        <h4 className="text-center text-secondary">Model Details</h4>
        <div className="col-md-4 card-raised marginAuto">
          <form className="form-group" onSubmit={this.handleSubmit}>
            {this.renderInput("name", "Name")}
            {this.renderInput("modelWear", "Model Wear")}
            {this.renderInput("height", "Height")}
            {this.renderInput("bust", "Bust")}
            {this.renderInput("waist", "Waist")}
            {this.renderInput("lowHip", "Low Hip")}
            {this.renderInput("highHip", "High Hip")}
            {this.renderButton("Save")}
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default ModelsForm;
