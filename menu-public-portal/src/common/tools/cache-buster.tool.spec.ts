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
      jest.setSystemTime(
        new Date(
          "Wed Feb 23 2022 08:17:40 GMT+0000 (hora estándar de Europa central"
        )
      );

      //Act
      const result = cacheBuster(uri);
      //Assert
      expect(result).toEqual("http://localhost:3000/?cache=2022139");
    });
  });
});
