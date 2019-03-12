import { actionsEnums } from "../common/actionsEnums";
import { FilterEntity } from "../model/filter";

export type FilterState = FilterEntity;

export const memberFilterReducer = (
  state: FilterState = { organizationField: "lemoncode" },
  action
) => {
  switch (action.type) {
    case actionsEnums.UPDATE_ORGANIZATION_FIELD:
      return handleUpdateOrganizationFilterState(state, action.payload);
  }

  return state;
};

const handleUpdateOrganizationFilterState = (
  state: FilterState,
  organizationName: string
) => ({
  ...state,
  organizationField: organizationName
});
