export const config: any = {
  "emailAuthApi": "sea/LoginAuth",
  "loginApi": "sea/UserLogin",
  "getAdminMenuMappingsData": "sea/getMenuMappings",
  "GetDashBoardCount":"DashboardApi/GetDashboardCount",
  "GetDashboardChart":"DashboardApi/GetDashboardDepositChart",
  'GetTopDepositors': 'DashboardApi/GetTopDepositors',
  'GetTopWithdraw': 'DashboardApi/GetTopWithdraw',
  'GetClientGatewayData': 'DashboardApi/GetClientGatewayData',
  "GetPGRefCode":"UserApi/GetRefCode",
  "getpgGraphData":"DashboardApi/BindGraphDateWiseClientGateway",
  'SavePaymentGetway': 'DashboardApi/SavePaymentGetway',
  "ChangeClientPGStatus":"UserApi/ChangeClientPGStatus",
  "ChangeClientPPStatus":"UserApi/ChangeClientPPStatus",
  "ChangeClientPGIPStatus":"UserApi/ChangeClientPGIPStatus",
  "GetPGClientIPList":"UserApi/GetPGClientIPList",
  "SavePaymentGetwayIPAddress":"UserApi/SavePaymentGetwayIPAddress",
  "DeleteClientPGIPStatus":"UserApi/DeleteClientPGIPStatus",

  "GetAdminDetails": "LeadApi/GetAdminDetail",
  "GetLeadClients": "LeadApi/GetLeadClientData",
  "SaveLead": "LeadApi/SaveLead",
  "GetAllLeads": "LeadApi/GetAllLeads",
  "AssignLeadToAdmin": "LeadApi/AssignLeadToAdmin",
  "GetLeadLog": "LeadApi/GetLeadLog",
  "UploadBulkLead": "LeadApi/UploadBulkLead",
  "GetLeadPerformer": "LeadApi/GetLeadPerformer",
  "GetAgentTiming": "LeadApi/GetAgentTiming",
  "GetMyLeads": "LeadApi/GetMyLeads",
  "GetRefCode": "LeadApi/GetRefCode",
  "SaveLeadLog": "LeadApi/SaveLeadLog",
  'ChangePassword': 'UserApi/ChangePassword',
  "GetLeadDashhboard": "LeadApi/GetLeadDashhboard",
  "GetRegisterLead": "LeadApi/GetRegisterLead",

  'GetDeposits':'dashboardApi/GetDeposits',
  'GetSettlement':'dashboardApi/GetSettlement',
  'GetChargebackList':'dashboardApi/GetChargebackList',
  'DownLoadDepositExcel':'dashboardApi/DownLoadDepositExcel',
  'DownLoadStatementExcel':'dashboardApi/DownLoadStatementExcel',
  'MakeCallBackAllClient':'api/OtherApi/MakeCallBackAllClient',
  'TransferFund':'dashboardApi/TransferFund',

  "getAllPlayer" : "UserApi/GetAllPlayer",
  "getUserData" : "UserApi/GetUserData",
  "hasDepositAccess" : "UserApi/HasDepositAccess",
  "getUserDepositeData" : "UserApi/GetUserDepositeData",
  "getUserStatement": "UserApi/GetUserStatement",
  "getUserWithdrawal" : "UserApi/GetUserWithdrawData",
  "getGamePlayed" : "UserApi/getGamePlayed",
  "getCallLog" : "UserApi/GetCallBackRequestList",
  "getOnlineDepositList" : "UserApi/GetOnlineDepositList",
  "changeUserStatus" : "UserApi/ChangeUserStatus",
  "updateUserAccount" : "UserApi/UpdateUserAccount",
  "exportDepositAndWithdrawal": "UserApi/ExportDepositAndWithdrawal",
  "exportStatement": "UserApi/ExportStatement",
  "getAdminRoles": "UserApi/GetAdminRolesData",
  "getAllAdmins": "UserApi/GetAllAdmins",
  "saveRoleChange": "UserApi/SaveRoleChange",
  "saveBlockAdmin": "UserApi/SaveBlockAdmin",
  "saveIMPSAccess": "UserApi/SaveIMPSAccess",
  'saveDepositAccess': 'UserApi/SaveDepositAccess',
  "getCallBackRequest": "UserApi/GetCallBackRequest",
  "saveCallRequest": "UserApi/SaveCallRequest",
  "saveUserProfile": "UserApi/SaveUserProfile",
  "withdrawalData": "UserApi/WithdrawalData",
  "saveAdminProfile":"UserApi/SaveAdminProfile",

  "getPayoutProviders":"withdrawal/GetPGPayoutProviderData",// withdrawal Page
  "getSafeXPayBalance":"UserApi/GetSafeXPayBalance",// withdrawal Page
  "otpOpenMoney":"withdrawal/InitiateOtpViaOpenMoney",// withdrawal Page
  "trxOpenMoney":"withdrawal/TransferFundsPlayerViaOpenMoney",// withdrawal Page
  "otpOpenMoneyRoyal":"withdrawal/InitiateOtpViaOpenMoneyRoyal",// withdrawal Page
  "trxOpenMoneyRoyal":"withdrawal/TransferFundsPlayerViaOpenMoneyRolyal", // withdrawal Page
  "trxVader":"withdrawal/TransferFundsPlayerViaVaderPay",// withdrawal Page
  "exportWithdrawalData":"withdrawal/ExportWithdrawalData",// withdrawal Page
  "getIPData":"UserApi/GetAdminIPAddress",//ip listing
  "updateIPData":"Userapi/UpdateAdminIPAddress",//ip listing
  "removeIP":"Userapi/RemoveAdminIPAddress",//ip listing
  "saveIP":"Userapi/SaveAdminIPAddress",//ip listing

  "GetBankTransaction": "UserApi/GetBankTransaction",//banktransaction
  "SaveBankTransaction": "UserApi/SaveBankTransaction",//banktransaction
  
  "getAllBanks":"UserApi/GetAllBankDetails",//allbank
  "changeUpiStat":"UserApi/ChangeBankUpiStatus",//allbank
  "changeUpiVisibility":"UserApi/ChangeBankUpiIsVisible",//allbank
  "getBankSummary":"UserApi/GetBankUPIPercentageSummaryViaUPI",//allbank
  "getBClientList":"UserApi/GetBankClientList",//allbank
  "addToBClient":"UserApi/AddBankClientMapping",//allbank
  "delFromBClient":"UserApi/RemoveBankClientMapping",//allbank

  "getPGMaster":"UserApi/GetPaymentGatewayMasterDetails",//pgmaster
  "setPGStat":"UserApi/ChangePaymentGatewayStatus",//pgmaster
  "saveNewPGMaster":"UserApi/SavePaymentGatewayMasterDetails",//pgmaster

  "getPayoutList":"UserApi/GetClientPayoutWithoutBalanceList",//client-payout
  "getPayoutData":"UserApi/GetClientPayout",//client-payout
  "getWithdrawBank":"UserApi/GetActiveWithdrawBankDetails",//client-payout
  "getPGPayoutProvider":"UserApi/GetPGPayoutProviderData",//client-payout
  "getSafeXPayBal":"UserApi/GetSafeXPayBalance",//client-payout
  "dlCPayout":"UserApi/ExportClientPayout",//client/client-payout

  "doCallback":"UserApi/CallbackClientTransaction",//client-deposit
  "expCDeposit":"UserApi/ExportClientDeposit",//client-deposit

  "getClientDeposit":"UserApi/GetClientDeposit",//client-deposit client-add-deposit
  "editCbackTrx":"UserApi/EditCallbackClientTransaction",//client-add-deposit

  "userVerifications":"UserApi/GetUserVarificationData",//uservarification
  "blockUserUPI": "UserApi/BlockUPI",//uservarification

  "getPGMstData": "UserApi/GetPGPaymentGatewayMasterDetails",//client/pg-master
  "changePGStatus": "UserApi/ChangePGPaymentGatewayStatus",//client/pg-master
  "savePGDetails": "UserApi/SavePGPaymentGatewayMasterDetails",//client/pg-master

  "getClientRoles":"UserApi/GetClientRoleList",//client/client-pg-user
  "getClients":"UserApi/GetClientList",//client/client-pg-user
  "getClientAdmins":"UserApi/GetClientAdminData",//client/client-pg-user
  "changeAdminStatus":"UserApi/ChangeAdminStatus",//client/client-pg-user
  "saveClientUser":"UserApi/SaveClientUser",//client/client-pg-user

  "getPayoutBal":"UserApi/GetPayoutBalance",//client/payout-balance
  "getClientPayoutList":"UserApi/GetClientPayoutList",//client/payout-balance
  "savePayoutBal":"UserApi/SavePayoutBalance",//client/payout-balance
  
  "getClientRecon":"UserApi/GetClientReconciliation",//reconciliation/recon
  "downLoadWithdraw":"UserApi/DownLoadExcelWithdrawal",//reconciliation/recon

  "getTally":"UserApi/GetTallyRecords",//reconciliation/tally
  "saveTally":"UserApi/SaveTally",//reconciliation/tally

  "dlPaykunPmt":"UserApi/DownloadPaymentPaykun",//reconciliation/pay-gate

  "dlDailyUserActWGame":"UserApi/DownLoadADailyUserAcivityWithGame",//reconciliation/download
  "dlGamesAct":"UserApi/DownloadGameAcivity",//reconciliation/download
  "dlAllPGdata":"UserApi/DownLoadAllPaymentGatewayExcell",//reconciliation/download
  "dlAllPOdata":"UserApi/DownLoadAllPayoutExcell",//reconciliation/download

  "getClientCb":"UserApi/GetClientChargeback",//dashboard/chargeback
  "dlClientCb":"UserApi/ExportClientChargeback",//dashboard/chargeback
  "makeCBReq":"UserApi/MakeChargebackRequest",//dashboard/chargeback

  "getWD":"UserApi/GetWithdraw",//dashboard/addclientpayout
  "submitWdReq":"UserApi/SubmitWithdrawalRequest",//dashboard/addclientpayout

  "getRefCodelead":"LeadApi/GetRefCode",//dashboard/bdpginfo
  "getDataBDCG":"UserApi/GetBDClientGatewayData",//dashboard/bdpginfo
  "getGraphBDCG":"UserApi/BindBDGraphDateWiseClientGateway",//dashboard/bdpginfo
  "dlBDCGPayIn":"UserApi/DownLoadAllBDPaymentGatewayExcell",//dashboard/bdpginfo
  "dlBDCGPayOut":"UserApi/DownLoadAllBDPayoutExcell",//dashboard/bdpginfo
  "saveBDCG":"UserApi/SaveBDPaymentGetway",//dashboard/bdpginfo
  "changeBDCPP":"UserApi/ChangeBDClientPPStatus",//dashboard/bdpginfo
  "changeBDCPG":"UserApi/ChangeBDClientPGStatus",//dashboard/bdpginfo

  "getPayClicks":"UserApi/GetPaymenntClickData",//users/payment-click
  "blockUserPayment":"UserApi/BlockUserTrypayment",//users/payment-click

  "getBDBankTrx":"UserApi/GetBDBankTransaction",//bd-bank/bd-bank-trx
  "saveBDBankTrx":"UserApi/SaveBDBankTransaction",//bd-bank/bd-bank-trx

  "dlUserDeposits":"UserApi/DownloadUserDepositData",//dashboard/index
  "dlUserWithdraws":"UserApi/DownloadUserWithdrawData",//dashboard/index
  "dlUserBnusDeposits":"UserApi/DownloadUserBonusDepositData",//dashboard/index

  "okWithdrawal":"UserApi/ApproveWithdrawal",//users/withdrawal-request
  
  'transferFundViaPayconnect':'UserApi/TransferFundsWithOtpPlayer', //users/approval-BankDetailsComponent
  'initiateOtp':'UserApi/InitiateOtp', //users/approval-BankDetailsComponent
  'transferFundsWithOtpPlayerUsingPayMyRecharge':'UserApi/TransferFundsWithOtpPlayerUsingPayMyRecharge', //users/approval-BankDetailsComponent
  'transferFundsWithOtpPlayerV1':'UserApi/TransferFundsWithOtpPlayerV1', //users/approval-BankDetailsComponent
  'transferUserFundsUsingVaderPay':'UserWithdrawal/TransferUserFundsUsingVaderPay', //users/approval-BankDetailsComponent
  'initiateOtpV1':'UserApi/InitiateOtpV1', //users/approval-BankDetailsComponent

  'approveClientPayout':'UserApi/ApproveClientPayout', //client/approval-BankDetailsComponent
  'transferFundsUsingPayMyRecharge':'UserApi/TransferFundsUsingPayMyRecharge', //client/approval-BankDetailsComponent
  'approveClientPayoutV1':'UserApi/ApproveClientPayoutV1', //client/approval-BankDetailsComponent
  'transferClientFundsUsingVaderPay':'UserWithdrawal/TransferClientFundsUsingVaderPay', //client/approval-BankDetailsComponent
  'updatePayoutData':'UserApi/UpdatePayoutData', //client/approval-BankDetailsComponent

  'downLoadAllPaymentGatewayExcell':'UserApi/DownLoadAllPaymentGatewayExcell', //dashboard/payment-gateway /pg-data
  'downLoadAllPayoutExcell':'UserApi/DownLoadAllPayoutExcell', //dashboard/payment-gateway /pg-data

  'processWithdrawal':'UserApi/ProcessWithdrawal', //user/withdrawal-request
  'negativeWithdrawalData':'UserApi/NegativeWithdrawalData', //user/ negative-withdrawal-request
  'exportNegativeWithdrawalData':'UserApi/ExportNegativeWithdrawalData', //user/ negative-withdrawal-request
  'clientWithdrawalProviderReset':'UserApi/ClientWithdrawalProviderReset', //user/ negative-withdrawal-request
}