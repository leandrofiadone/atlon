import {Button, Form} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import {useState, useEffect} from "react"
import axios from "axios"

function CreatePost() {
  const navigate = useNavigate()
  const [post, setPost] = useState({
    title: "",
    description: ""
  })

  const handleChange = (event) => {
    const {name, value} = event.target
    setPost((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
    console.log(event.target)
  }

  const handleClick = (event) => {
    event.preventDefault()
    axios
      .post("http://localhost:3001/create", post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err))

    navigate("post")
  }

  useEffect(() => {
    console.log(post)
  }, [post])

  return (
    <div style={{width: "100%", margin: "auto auto", textAlign: "center"}}>
      <h1>Create a post</h1>
      <Form>
        <Form.Group>
          <Form.Control
            value={post.title}
            name="title"
            placeholder="Title"
            style={{marginBottom: "1rem"}}
            onChange={handleChange}
          />
          <Form.Control
            value={post.description}
            name="description"
            placeholder="Description"
            style={{marginBottom: "1rem"}}
            onChange={handleChange}
          />
        </Form.Group>
        <Button
          style={{width: "100%", marginBottom: "1rem"}}
          variant="outline-sucess"
          onClick={handleClick}>
          Create Post
        </Button>
      </Form>
      <Button
        style={{width: "100%"}}
        variant="outline-dark"
        onClick={() => navigate(-1)}>
        BACK
      </Button>
    </div>
  )
}

export default CreatePost
