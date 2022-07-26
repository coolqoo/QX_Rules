var obj = JSON.parse($response.body);

obj["info"]["subscriptions"]= [
      {
        "status": "active",
        "product": "unlimited",
        "duration_unit": "months",
        "id": 3690701,
        "in_grace_period": false,
        "platform": "apple",
        "starts_at": 1658849749,
        "duration_value": 1,
        "ends_at": 4099821292,
        "auto_renew_status": true,
        "plan_id": "lk.ios.s1m.t7d.p15.v2"
      }];

$done({body: JSON.stringify(obj)});

// Descriptions
