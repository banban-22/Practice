import React from 'react';
import ReactDOM from 'react-dom';
import { faker } from '@faker-js/faker';
import './style/App.css';
import CommentDetail from './CommnetDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>Warning!</h4>
          Are you sure you want to do this?
        </div>
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          pic={faker.image.avatar()}
          author="Sam"
          timeAgo="Today at 4:45PM"
          comment="Nice blog post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          pic={faker.image.avatar()}
          author="Alex"
          timeAgo="Today at 2:00AM"
          comment="Beautiful blog post!"
        />
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          pic={faker.image.avatar()}
          author="Jane"
          timeAgo="Yesterday at 5:00PM"
          comment="Great blog post!"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
