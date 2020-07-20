import React from 'react';
import { Card, ICardTokens, ICardSectionStyles, ICardSectionTokens } from '@uifabric/react-cards';
import { Text, TextField, Link, PrimaryButton, FontWeights } from 'office-ui-fabric-react';
import { CommandBar, ICommandBarItemProps } from 'office-ui-fabric-react/lib/CommandBar';
import { IButtonProps } from 'office-ui-fabric-react/lib/Button';

import {
    Stack,
    IStackProps,
    IStackStyles,
  } from "office-ui-fabric-react/lib/Stack";

import { Topbar } from "./components";

const stackTokens = { childrenGap: 50 };
const iconProps = { iconName: "Calendar" };
const stackStyles: Partial<IStackStyles> = { root: { width: 320 } };
const columnProps: Partial<IStackProps> = {
  tokens: { childrenGap: 15 },
  styles: { root: { width: 250 } },
};

const boldStyle = { root: { fontWeight: FontWeights.semibold } };

export const Project: React.FunctionComponent = () => {
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
            <TextField label="Reactant Name" />
            <TextField label="Invitated Email ID" placeholder="Leave blank if not available" />
            <PrimaryButton text="Create Project" />
          </Stack>
        </Stack>
      </>
  );
};
