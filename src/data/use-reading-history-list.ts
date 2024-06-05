import {
  TReadingHistory,
  TReadingHistoryList,
  ZReadingHistoryList,
} from "@/types/reading-history";
import { useState } from "react";

const loadReadingHistory = () => {
  const stringifiedHistory =
    localStorage.getItem(READING_HISTORY_KEY) ?? JSON.stringify([]);
  const parsedHistory = JSON.parse(stringifiedHistory);
  const validatedHistory = ZReadingHistoryList.safeParse(parsedHistory);

  if (validatedHistory.success) {
    return validatedHistory.data;
  }

  // TODO: log service to let us know that the parsed data is
  // not valid according to the schema
  if (process.env.NODE_ENV === "development") {
    console.error(
      "Failed to parse reading history data from localStorage:",
      validatedHistory.error,
    );
  }

  return [];
};

const READING_HISTORY_KEY = "readingHistory";

export const useReadingHistoryList = () => {
  const [readingHistoryList, setReadingHistory] = useState(loadReadingHistory);

  const save = (newHistoryList: TReadingHistoryList) => {
    if (newHistoryList.length === 0) {
      localStorage.removeItem(READING_HISTORY_KEY);
    } else {
      localStorage.setItem(READING_HISTORY_KEY, JSON.stringify(newHistoryList));
    }

    setReadingHistory(newHistoryList);
  };

  const addNewHistory = (newHistory: TReadingHistory) => {
    const filtered = readingHistoryList.filter(
      (story) => story.novelURL !== newHistory.novelURL,
    );
    const newReadingHistory = [...filtered, newHistory];
    save(newReadingHistory);
  };

  const removeHistory = (novelURL: string) => {
    const newReadingHistory = readingHistoryList.filter(
      (story) => story.novelURL !== novelURL,
    );

    save(newReadingHistory);
  };

  const clearHistory = () => {
    const confirmed = window.confirm(
      "Bạn có chắc chắn muốn xoá tất cả lịch sử đọc truyện?",
    );

    if (confirmed) {
      save([]);
    }
  };

  return {
    readingHistoryList,
    addNewHistory,
    removeHistory,
    clearHistory,
  };
};
