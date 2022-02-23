import { cacheBuster } from "./cache-buster.tool";

describe("common/tools/cache-buster.tool spec", () => {
  describe("cacheBuster", () => {
    it("should return empty string when it feeds an uri equals undefined", () => {
      //Arrange
      const uri: string = undefined;
      //Act
      const result = cacheBuster(uri);
      //Assert
      expect(result).toEqual("");
    });
    it("should return empty string when it feeds an uri equals null", () => {
      //Arrange
      const uri: string = undefined;
      //Act
      const result = cacheBuster(uri);
      //Assert
      expect(result).toEqual("");
    });
    it("should return empty string when it feeds an uri equals null", () => {
      //Arrange
      const uri: string = "http://localhost:3000/";

      jest.useFakeTimers("modern");
      jest.setSystemTime(new Date("2022-02-14"));

      //Act
      const result = cacheBuster(uri);
      //Assert
      expect(result).toEqual("http://localhost:3000/?cache=2022111");
    });
  });
});
