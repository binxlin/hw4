import React from 'react';
import $ from  'jquery'
class UserGithub extends React.Component {
   constructor(props) {
   super(props);
   this.state = {
   userfollowers:'',
   userlocate:'',
   userSchool:'',
   username: '',
   githubtUrl: '',
   avatarUrl: '',
   }
   }
   componentDidMount() {
   $.get(this.props.source, (result) => {
   console.log(result);
   const data = result;
   if (data) {
   this.setState({
   userfollowers: data.followers_url,
   userlocate: data.location,
   userSchool: data.company,
   username: data.name,
   githubtUrl: data.html_url,
   avatarUrl: data.avatar_url
   });
   }
   });
   }
   render() {
   return (
   <div>
   <h3>{this.state.username}</h3>
   <img src={this.state.avatarUrl} />
   <br/>
   <a href={this.state.githubtUrl}>Github Link</a>.
   <h3>{this.state.userSchool}</h3>
   <h3>{this.state.userlocate}</h3>
   <a href={this.state.userfollowers}>Followers</a>
   </div>
   );
   } }
export default UserGithub;