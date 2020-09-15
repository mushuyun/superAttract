import { createSelector } from "reselect";
import directoryReducer from "./directorReducer";

const selectDirectory = state => state.directory;

export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);

// export { selectDirectorySections };