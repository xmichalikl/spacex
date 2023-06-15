import styled from 'styled-components';
import SpacexTable from './table/SpacexTable';
import SpacexSettings from './SpacexSettings';
import { TableProvider } from '../context/TableContext';

const Container = styled.div`
  padding: 30px;
`;

function MainContainer() {
  return (
    <Container>
      <TableProvider>
        <SpacexSettings />
        <SpacexTable />
      </TableProvider>
    </Container>
  );
}

export default MainContainer;
