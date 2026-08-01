import os
import pytest
import requests

BASE_URL = os.environ.get('REACT_APP_BACKEND_URL', 'https://keer-responsive.preview.emergentagent.com').rstrip('/')
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Root endpoint
class TestRoot:
    def test_root_returns_jb_keer_message(self, client):
        r = client.get(f"{API}/")
        assert r.status_code == 200
        data = r.json()
        assert "J B KEER" in data.get("message", "")
        assert data.get("tagline") == "Born to Bond"


# Leads CRUD
class TestLeads:
    valid_payload = {
        "name": "TEST_John Doe",
        "email": "test_john@example.com",
        "phone": "9876543210",
        "company": "TEST Co",
        "project_type": "Industrial Adhesives",
        "message": "Need consultancy for industrial bonding solutions.",
    }

    def test_create_lead_success(self, client):
        r = client.post(f"{API}/leads", json=self.valid_payload)
        assert r.status_code == 201, r.text
        data = r.json()
        assert "id" in data and isinstance(data["id"], str)
        assert "created_at" in data
        assert data["name"] == self.valid_payload["name"]
        assert data["email"] == self.valid_payload["email"]
        assert data["project_type"] == "Industrial Adhesives"
        assert "_id" not in data

    def test_create_lead_invalid_email(self, client):
        bad = {**self.valid_payload, "email": "not-an-email"}
        r = client.post(f"{API}/leads", json=bad)
        assert r.status_code == 422

    def test_create_lead_short_name(self, client):
        bad = {**self.valid_payload, "name": "A"}
        r = client.post(f"{API}/leads", json=bad)
        assert r.status_code == 422

    def test_create_lead_missing_project_type(self, client):
        bad = {k: v for k, v in self.valid_payload.items() if k != "project_type"}
        r = client.post(f"{API}/leads", json=bad)
        assert r.status_code == 422

    def test_list_leads_contains_created_and_no_objectid(self, client):
        # Insert a unique lead first
        unique_email = "test_list_check@example.com"
        payload = {**self.valid_payload, "email": unique_email, "name": "TEST_ListCheck"}
        cr = client.post(f"{API}/leads", json=payload)
        assert cr.status_code == 201

        r = client.get(f"{API}/leads")
        assert r.status_code == 200
        leads = r.json()
        assert isinstance(leads, list)
        assert len(leads) >= 1
        # no _id leak
        for lead in leads:
            assert "_id" not in lead
        # verify our inserted lead present
        assert any(l.get("email") == unique_email for l in leads)
