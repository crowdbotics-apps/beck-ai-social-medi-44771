import axios from "axios";
const beckaisocialmediAPI = axios.create({
  baseURL: "https://beck-ai-social-medi-44771.botics.co",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

function api_docs_schema_retrieve(payload) {
  return beckaisocialmediAPI.get(`/api-docs/schema/`, {
    params: {
      lang: payload.lang
    }
  });
}

function api_v1_login_create(payload) {
  return beckaisocialmediAPI.post(`/api/v1/login/`, payload);
}

function api_v1_signup_create(payload) {
  return beckaisocialmediAPI.post(`/api/v1/signup/`, payload);
}

function modules_privacy_policy_list(payload) {
  return beckaisocialmediAPI.get(`/modules/privacy-policy/`);
}

function modules_privacy_policy_create(payload) {
  return beckaisocialmediAPI.post(`/modules/privacy-policy/`, payload);
}

function modules_privacy_policy_retrieve(payload) {
  return beckaisocialmediAPI.get(`/modules/privacy-policy/${payload.id}/`);
}

function modules_privacy_policy_update(payload) {
  return beckaisocialmediAPI.put(`/modules/privacy-policy/${payload.id}/`, payload);
}

function modules_privacy_policy_partial_update(payload) {
  return beckaisocialmediAPI.patch(`/modules/privacy-policy/${payload.id}/`, payload);
}

function modules_privacy_policy_destroy(payload) {
  return beckaisocialmediAPI.delete(`/modules/privacy-policy/${payload.id}/`);
}

function modules_terms_and_conditions_list(payload) {
  return beckaisocialmediAPI.get(`/modules/terms-and-conditions/`);
}

function modules_terms_and_conditions_create(payload) {
  return beckaisocialmediAPI.post(`/modules/terms-and-conditions/`, payload);
}

function modules_terms_and_conditions_retrieve(payload) {
  return beckaisocialmediAPI.get(`/modules/terms-and-conditions/${payload.id}/`);
}

function modules_terms_and_conditions_update(payload) {
  return beckaisocialmediAPI.put(`/modules/terms-and-conditions/${payload.id}/`, payload);
}

function modules_terms_and_conditions_partial_update(payload) {
  return beckaisocialmediAPI.patch(`/modules/terms-and-conditions/${payload.id}/`, payload);
}

function modules_terms_and_conditions_destroy(payload) {
  return beckaisocialmediAPI.delete(`/modules/terms-and-conditions/${payload.id}/`);
}

function rest_auth_login_create(payload) {
  return beckaisocialmediAPI.post(`/rest-auth/login/`, payload);
}

function rest_auth_logout_create(payload) {
  return beckaisocialmediAPI.post(`/rest-auth/logout/`);
}

function rest_auth_password_change_create(payload) {
  return beckaisocialmediAPI.post(`/rest-auth/password/change/`, payload);
}

function rest_auth_password_reset_create(payload) {
  return beckaisocialmediAPI.post(`/rest-auth/password/reset/`, payload);
}

function rest_auth_password_reset_confirm_create(payload) {
  return beckaisocialmediAPI.post(`/rest-auth/password/reset/confirm/`, payload);
}

function rest_auth_registration_create(payload) {
  return beckaisocialmediAPI.post(`/rest-auth/registration/`, payload);
}

function rest_auth_registration_resend_email_create(payload) {
  return beckaisocialmediAPI.post(`/rest-auth/registration/resend-email/`, payload);
}

function rest_auth_registration_verify_email_create(payload) {
  return beckaisocialmediAPI.post(`/rest-auth/registration/verify-email/`, payload);
}

function rest_auth_user_retrieve(payload) {
  return beckaisocialmediAPI.get(`/rest-auth/user/`);
}

function rest_auth_user_update(payload) {
  return beckaisocialmediAPI.put(`/rest-auth/user/`, payload);
}

function rest_auth_user_partial_update(payload) {
  return beckaisocialmediAPI.patch(`/rest-auth/user/`, payload);
}

export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  modules_privacy_policy_list,
  modules_privacy_policy_create,
  modules_privacy_policy_retrieve,
  modules_privacy_policy_update,
  modules_privacy_policy_partial_update,
  modules_privacy_policy_destroy,
  modules_terms_and_conditions_list,
  modules_terms_and_conditions_create,
  modules_terms_and_conditions_retrieve,
  modules_terms_and_conditions_update,
  modules_terms_and_conditions_partial_update,
  modules_terms_and_conditions_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
};