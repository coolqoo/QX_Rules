var obj = JSON.parse($response.body);

obj["info"]["subscriptions"]= [
      {
         "status":"trial",
         "product":"unlimited",
         "duration_unit":"months",
         "id":3690701,
         "in_grace_period":false,
         "platform":"apple",
         "starts_at":1658849749,
         "duration_value":1,
         "ends_at":4659454548,
         "auto_renew_status":true,
      }];

$done({body: JSON.stringify(obj)});

// Descriptions
