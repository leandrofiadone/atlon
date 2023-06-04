import {useEffect, useState} from "react"
import axios from "axios"
import {Button} from "react-bootstrap"
import Modal from "react-bootstrap/Modal"
import {Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"

function Posts() {
  const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [updatedPosts, setUpdatedPosts] = useState({})
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    axios
      .get("http://localhost:3001/post")
      .then((res) => {
        console.log(res)
        setPosts(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const deletePost = (id) => {
    console.log(id)
    axios
      .delete(`http://localhost:3001/delete/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    window.location.reload()
  }

  const updatePost = (posts) => {
    console.log(posts)
    setUpdatedPosts(posts)
    handleShow()
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    setUpdatedPosts((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const saveUpdatePost = () => {
    axios
      .put(`http://localhost:3001/update/${updatedPosts._id}`, updatedPosts)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    handleClose()
    window.location.reload()
  }

  return (
    <div style={{width: "150%", textAlign: "center", margin: "auto auto"}}>
      <h1>Posts Pages</h1>
      <Button
        style={{width: "100%", marginBottom: "1rem"}}
        variant="outline-dark"
        onClick={() => navigate(-1)}>
        Back
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                style={{marginBottom: "1rem"}}
                placeholder="title"
                name="title"
                value={updatedPosts.title ? updatedPosts.title : ""}
                onChange={handleChange}
              />
              <Form.Control
                name="description"
                value={updatedPosts.description ? updatedPosts.description : ""}
                placeholder="description"
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveUpdatePost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {posts ? (
        <>
          {posts.map((post) => {
            return (
              <div
                key={post._id}
                style={{
                  border: "solid lightgray 1px",
                  borderRadius: "20px",
                  marginBottom: "1rem"
                }}>
                <h4>{post.title}</h4>
                <p>{post.description}</p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "10px"
                  }}>
                  <Button
                    onClick={() => updatePost(post)}
                    variant="outline-info"
                    style={{width: "100%"}}>
                    UPDATE
                  </Button>
                  <Button
                    onClick={() => deletePost(post._id)}
                    variant="outline-danger"
                    style={{width: "100%"}}>
                    DELETE
                  </Button>
                </div>
              </div>
            )
          })}
        </>
      ) : (
        ""
      )}
    </div>
  )
}

export default Posts
