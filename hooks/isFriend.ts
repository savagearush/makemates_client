import { AuthContext } from "@/context/AuthContext";
import axios from "axios";
import { useState, useEffect, useContext } from "react";

export function useFollowed(friendId: number) {
  const [isFollowed, setIsFollowed] = useState(false);
  const { currentUser }: any = useContext(AuthContext);

  useEffect(() => {
    const getResult = async () => {
      try {
        const res = await axios.post(
          "http://localhost:5000/search/checkFollowed",
          { userId: currentUser, friendId },
          { withCredentials: true }
        );
        if (res.data == "USER_FOUND") {
          setIsFollowed(true);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getResult();
    return;
  }, []);

  return isFollowed;
}
