import React, { ComponentProps, FunctionComponent } from 'react';

import { SandboxesItem } from 'app/pages/Dashboard/Sidebar/SandboxesItem';

import { Container } from './elements';
import { TeamsPicker } from './TeamsPicker';

type Props = Pick<
  ComponentProps<typeof TeamsPicker>,
  'currentPath' | 'currentTeamId' | 'onSelect'
>;
export const DirectoryPicker: FunctionComponent<Props> = ({
  currentPath,
  currentTeamId,
  onSelect,
}) => (
  <Container>
    <SandboxesItem
      currentPath={currentPath}
      currentTeamId={currentTeamId}
      onSelect={onSelect}
      openByDefault
      teamId={undefined}
    />

    <TeamsPicker
      currentPath={currentPath}
      currentTeamId={currentTeamId}
      onSelect={onSelect}
    />
  </Container>
);
