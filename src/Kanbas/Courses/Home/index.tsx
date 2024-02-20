import ModuleList from "../Modules/List";

function Home() {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <h2>Home</h2>
        <ModuleList />
      </div>
      <div>
        <h2>Status</h2>
        <table>
          <tbody>
            <tr>
              <td><button>Unpublish</button></td>
              <td><button>Publish</button></td>
            </tr>
          </tbody>
        </table>
        <button>Import Existing Content</button><br />
        <button>Import From Commons</button><br />
        <button>Choose Home Page</button><br />
        <button>View Course Stream</button><br />
        <button>New Announcement</button><br />
        <button>New Analytics</button><br />
        <button>View Course Notifications</button><br />

      </div>


    </div>
  );
}

export default Home;
