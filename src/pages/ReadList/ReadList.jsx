import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../components/Utility/addToDB";

const ReadList = () => {
  const [readList, setReadList] = useState();
  const data = useLoaderData();
  // console.log(data);

  useEffect(() => {
    const storedBookData = getStoredBook();
    const ConvertedStoredBooks = storedBookData.map((id) => parseInt(id));

    const myReadList = data.filter((book) =>
      ConvertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);
  console.log(readList);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read Book List </Tab>
          <Tab>My Wish List</Tab>
        </TabList>

        <TabPanel>
          <span>Count: </span>
          <h2>Book i read</h2>
        </TabPanel>
        <TabPanel>
          <h2>My wish List</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
