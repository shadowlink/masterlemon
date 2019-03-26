import * as model from "../../../rest-api/model";
import * as vm from "./viewModel";
import { mapMemberListModelToVM } from "./mappers";

describe("pages/members/list/mappers specs", () => {
  describe("mapMemberListModelToVM", () => {
    it("should return [] when passing memberEntity[] equals undefined", () => {
      // Arrange
      const memberEntity: model.Member[] = undefined;

      // Act
      const result = mapMemberListModelToVM(memberEntity);

      // Assert
      expect(result).toEqual([]);
    });

    it("should return [] when passing memberEntity[] equals null", () => {
      // Arrange
      const memberEntity: model.Member[] = null;

      // Act
      const result = mapMemberListModelToVM(memberEntity);

      // Assert
      expect(result).toEqual([]);
    });

    it("should return [] when passing memberEntity[] equals []", () => {
      // Arrange
      const memberEntity: model.Member[] = [];

      // Act
      const result = mapMemberListModelToVM(memberEntity);

      // Assert
      expect(result).toEqual([]);
    });

    it("should return VM[] when passing memberEntity[]", () => {
      // Arrange
      const memberEntity: model.Member[] = [
        { avatar_url: "", id: 1, login: "juan" },
        { avatar_url: "", id: 3, login: "maria" },
        { avatar_url: "", id: 4, login: "roberto" }
      ];

      const expectRes: vm.Member[] = [
        { avatarUrl: "", id: 1, name: "juan" },
        { avatarUrl: "", id: 3, name: "maria" },
        { avatarUrl: "", id: 4, name: "roberto" }
      ];
      // Act
      const result = mapMemberListModelToVM(memberEntity);

      // Assert
      expect(result).toEqual(expectRes);
    });
  });
});
