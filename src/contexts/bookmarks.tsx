import React, { useState, createContext } from "react";

export interface IBookmark {
  id: string;
  name: string;
  type: string;
  image: string;
}

export interface IBookmarkContext {
  bookmarks: IBookmark[],
  setBookmarks: React.Dispatch<React.SetStateAction<IBookmarkContext['bookmarks']>>
}

export const BookmarkContext = createContext<IBookmarkContext | null>(null);

export const BookmarkProvider = React.memo(({children}) => {
  const [bookmarks, setBookmarks] = useState<IBookmark[]>([]);
  return (
    <BookmarkContext.Provider value={{bookmarks, setBookmarks}}>
      {children}
    </BookmarkContext.Provider>
  )
})
