import styled from 'styled-components';
import SpacexTable from './table/SpacexTable';
import SpacexSettings from './SpacexSettings';
import { TableProvider } from '../context/TableContext';
// import { gql, useQuery } from 'urql';

const Container = styled.div`
  padding: 30px;
`;

// const SpacexQuery = gql`
//   {
//     launchesPast {
//       mission_name
//       launch_date_local
//       links {
//         article_link
//         video_link
//       }
//       rocket {
//         rocket_name
//         first_stage {
//           cores {
//             flight
//             core {
//               reuse_count
//               status
//             }
//             land_success
//           }
//         }
//         second_stage {
//           payloads {
//             payload_type
//             payload_mass_kg
//             payload_mass_lbs
//           }
//         }
//       }
//     }
//   }
// `;

function PageContainer() {
  // const [result, reexecuteQuery] = useQuery({
  //   query: SpacexQuery,
  // });
  // const { data, fetching, error } = result;
  // if (fetching) return <p>Loading...</p>;
  // if (error) return <p>Oh no... {error.message}</p>;

  return (
    <Container>
      <TableProvider>
        <SpacexSettings />
        <SpacexTable />
      </TableProvider>
    </Container>
  );
}

export default PageContainer;
