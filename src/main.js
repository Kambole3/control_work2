import DataManager from "./core/DataManager.js";
import ApplicantForm from "./views/ApplicantForm.js";
import ApplicantList from "./views/ApplicantList.js";
import SearchFilter from "./views/SearchFilter.js";

document.addEventListener("DOMContentLoaded", () => {
  const dataManager = new DataManager("applicants");

  const applicantList = new ApplicantList(dataManager);

  const applicantForm = new ApplicantForm(dataManager, () => {
    applicantList.updateList();
  });

  const searchFilter = new SearchFilter(dataManager, applicantList);

  applicantList.updateList();
});
