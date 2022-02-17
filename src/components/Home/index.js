import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css';

const Home = ({ contacts, deleteContact }) => {
  return (
    <div className="container">
      <h2 style={{textAlign:"center" ,color : "black",paddingTop : '50px'} }>GoodBits Contacts</h2>
      <div className="row d-flex flex-column">
        <Link to="/add" className="btn btn-outline-dark my-5 ml-auto ">
          Add Contact
        </Link>
        <div className="col-md-10 mx-auto my-4">
          <table className="table table-hover" style={{padding : '250px'}}>
            <thead className="table-header bg-dark text-white"  >
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {contacts.length > 0 ? (
                contacts.map((contact, id) => (
                  <tr key={id}>
                    <td>{id + 1}</td>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.phone}</td>
                    <td>
                      <Link
                        to={`/edit/${contact.id}`}
                        className="btn btn-sm btn-primary mr-1"
                      >
                        Edit
                      </Link>
                      <button
                        type="button"
                        onClick={() => deleteContact(contact.id)}
                        className="btn btn-sm btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th>No contacts found</th>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  contacts: state,
});

const mapDispatchToProps = (dispatch) => ({
  deleteContact: (id) => {
  //   dispatch({ type: "DELETE_CONTACT", payload: id });
  // },
  confirmAlert({
    title: 'Delete Items',
    message: 'Are you sure to do this.',
    buttons: [
      {
        label: 'Yes',
        onClick: () => dispatch({ type: "DELETE_CONTACT", payload: id })
      },
      {
        label: 'No',
        onClick: () => console.log("nothing")
      }
    ]
  });

  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
