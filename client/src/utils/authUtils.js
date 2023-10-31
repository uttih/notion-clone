import authApi from "../api/authApi";

const authUtils = {
  //JWTチェック
  isAuthenticated: async () => {
    const token = localStorage.getItem("token");
    if (!token) return false;

    try {
      const use = await authApi.verifyToken();
      return resizeBy.user;
    } catch {
      return false;
    }
  },
};

export default authUtils;
