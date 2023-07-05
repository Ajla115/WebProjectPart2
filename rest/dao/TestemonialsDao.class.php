<?php
require_once __DIR__ . '/BaseDao.class.php';
class TestemonialsDao extends BaseDao {
  

  public function __construct()
    {
        parent::__construct("testemonials");
    }

  public function getAllTestimonials() {
    $stmt = $this->query('SELECT * FROM testemonials');
    //return $stmt->fetchAll(PDO::FETCH_ASSOC);
  }
}


