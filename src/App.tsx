import React from "react";
import { Text, Link, FontWeights } from "office-ui-fabric-react";
import api from "./config";
import {
  TextField,
  MaskedTextField,
} from "office-ui-fabric-react/lib/TextField";
import {
  DefaultButton,
  PrimaryButton,
  IStackTokens,
} from "office-ui-fabric-react";

import {
  Stack,
  IStackProps,
  IStackStyles,
} from "office-ui-fabric-react/lib/Stack";
import { Topbar } from "./components";

import {
  Dropdown,
  DropdownMenuItemType,
  IDropdownStyles,
  IDropdownOption,
} from "office-ui-fabric-react/lib/Dropdown";

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: "Calendar" };
const stackStyles: Partial<IStackStyles> = { root: { width: 320 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 250 } },
};

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

class App extends React.Component {

  state = {
    options: []
  }

  componentDidMount () {
    const self = this;
    api.get('/rxn/api/api/v1/projects')
      .then(function (response) {
        const items = response.data.payload.content;

        let options: IDropdownOption[] = [];

        items.map((element: any, index: any) => {
            options.push({key: element.id, text: element.name})
        });

        self.setState({options: options});
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <Topbar />
        <br />
        <br />
        <Stack
          horizontalAlign="center"
          verticalAlign="center"
          styles={{
            root: {
              width: "100%",
              margin: "0 auto",
              textAlign: "center",
              color: "#605e5c",
            },
          }}
          gap={15}
        >
          <Stack tokens={stackTokens} styles={stackStyles}>
            <Dropdown
              placeholder="Select an option"
              label="Project Name"
              options={this.state.options}
            />
            <TextField label="Reactant 1" />
            <TextField label="Reactant 2" />
            <PrimaryButton text="Create Prediction" allowDisabledFocus />
          </Stack>
        </Stack>
      </>
    );
  }
}

export default App;