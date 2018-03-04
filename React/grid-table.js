import Table, { IconColumn } from 'react-css-grid-table';

const headers = [
  {
    label: 'Title',
    value: 'title',
    width: '1fr',
  },
  {
    value: 'likes',
    width: '0.5fr',
  },
];

const data = [
  {
    title: 'This is the first post',
    likes: 3,
  },
  {
    title: 'This is the second post',
    likes: 2,
  },
];

const customColumns = {
  likes: {
   format: (data) => <IconColumn icon="iconClassNameHere" data={data} />,
   className: 'anyAdditionalClassName',
  },
};

<Table
  headers={headers}
  data={data}
  customColumns={customColumns}
/>
