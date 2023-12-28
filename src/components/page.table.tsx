import Container from 'react-bootstrap/Container'
import Table from 'react-bootstrap/Table'

function PageTable() {
    return (
        <Container>
            <Table style={{ margin: '40px 0', textAlign: 'center' }} striped bordered hover>
                <thead>
                    <tr>
                        <th>Year</th>
                        <th>HTML</th>
                        <th>JavaScript</th>
                        <th>NextJS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2023</td>
                        <td>0</td>
                        <td>0</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <td>2024</td>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <td>2025</td>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        {/* <td colSpan={2}>Larry the Bird</td>
                    <td>@twitter</td> */}
                    </tr>
                </tbody>
            </Table >
        </Container >
    );
}

export default PageTable;